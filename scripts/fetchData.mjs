import data from '../locations.json';
import fetch from 'node-fetch';
import fs from 'fs';

const endFile = './data.json';
const endpoint = 'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=*&returnGeometry=false&f=json&outSR=4326&where=';
const endpointNewCases = 'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=(NeuerFall%20IN(1%2C%20-1))%20AND%20(IdLandkreis%3D%27${data.RS}%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true';
const getLocationsEndpoint = () => {
  let _endpoint = endpoint;
  // endpoint
  // + escape(GEN = '' OR GEN = '')
  const locations = data.locations.map((location) => {
    return `GEN = '${location.toUpperCase()}'`;
  });
  _endpoint += encodeURI(locations.join(' OR '));
  return _endpoint;
};
const getNewCasesEndpoint = (data) => {
  let _endpoint = endpointNewCases.replace('${data.RS}', data.RS);
  return _endpoint;
};

/*
// data.features.attributes =>
[
{
  id: '', // OBJECTID
  newCasesID: "11012", // RS
  name: 'Berlin Spandau', // GEN
  inzidenz: 11.00, // cases7_per_100k
  date: '', // last_update
  population: 10000, // EWZ
  cases: 1000 // cases
  deaths: 11, // deaths
  newCases: 11,
},
...
]
*/

let json = {
  date: '',
  population: 0,
  cases: 0,
  deaths: 0,
  newCases: 0,
  locations: []
};

const handleLocation = async (location) => {
  const newCases = await fetch(getNewCasesEndpoint(location))
    .then((res) => res.json())
    .then((_json) => _json.features[0].attributes.value);

  json.date = location.last_update;

  json.population += location.EWZ;
  json.cases += location.cases;
  json.deaths += location.deaths;
  json.newCases += newCases;

  json.locations.push({
    id: location.OBJECTID,
    name: location.GEN,
    incidence: location.cases7_per_100k,
    date: location.last_update,
    population: location.EWZ,
    cases: location.cases,
    deaths: location.deaths,
    newCases,
  });
};

fetch(getLocationsEndpoint())
  .then((res) => res.json())
  .then(async (_json) => {
    await Promise.all(data.locations.map(async (location) => {
      await Promise.all(_json.features.map(async (_location) => {
        if (_location.attributes.GEN === location) {
          await handleLocation(_location.attributes);
        }
      }));
    }));

    fs.writeFileSync(endFile, JSON.stringify(json));
  });