<script>
    import { urlGithub } from '../package.json';
    import Card from './Card.svelte';
    import Head from './Head.svelte';
    import Header from './Header.svelte';
    import Social from './Social.svelte';

    export let data;

    let sortBy = 'name';
    let sortDir = 'down';

    let allEwz = 0;
    let allCases = 0;
    let allDeaths = 0;

    const sorters = [
        { index: 'name', label: 'ABC' },
        { index: 'population', label: 'Einwohner' },
        { index: 'incidence', label: 'Inzidenz' },
        { index: 'cases', label: 'Fälle' },
        { index: 'newCases', label: 'Neue Fälle' },
        { index: 'deaths', label: 'Tote' },
    ];

    function hmrUnit(number){
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function sortDataBy(_sortBy, _sortDir) {
        let sortedData = [];
        let searchParam = 'name';

        searchParam = _sortBy;

        console.log('data', data)

        sortedData = data.locations.sort((a, b) => {
            if (a[searchParam] < b[searchParam]) {
                return _sortDir === 'up' ? -1 : 1;
            }
            if (a[searchParam] > b[searchParam]) {
                return _sortDir === 'up' ? 1 : -1;
            }
            return 0;
        });

        return sortedData;
    }

    $: sortedData = sortDataBy(sortBy, sortDir);
</script>

<style>
    .sorter {
        padding: 1rem;
    }

    .sorter button {
        cursor: pointer;
    }

    .sorter .active {
        color: red;
    }

    .card-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        padding: 1rem;
        align-items: stretch;
        justify-items: center;
        flex-wrap: wrap;
    }

    .content {
        padding: 1rem;
    }
</style>

<Head/>

<main>
    <Header/>

    <center class="sorter">
        {#each sorters as sorter}
            <button
                    on:click={function() {
                    sortDir = sortBy !== sorter.index ? 'down' : sortDir === 'down' ? 'up' : 'down';
                    sortBy = sorter.index;
                }}
                    class={sortBy === sorter.index ? 'active' : ''}>
                {@html sorter.label} {@html sortBy === sorter.index ? sortDir === 'down' ? '&#8615;' : '&#8613' : ''}
            </button>
        {/each}
        <br/>
        <small>
            Stand: <strong>{data.date}</strong> |
            Einwohner: <strong>{hmrUnit(data.population)}</strong> |
            Fälle: <strong>{hmrUnit(data.cases)}</strong> |
            Neue Fälle: <strong>{hmrUnit(data.newCases)}</strong> |
            Tote: <strong>{hmrUnit(data.deaths)}</strong></small>
    </center>

    <div class="card-wrapper container">
        {#each sortedData as location (location.id)}
            <Card location={location} hmrUnit={hmrUnit}/>
        {/each}
    </div>

    <div class="container">
        <!-- Social sharing -->
        <center>
            <Social/>
        </center>

        <div class="content">
            <p>
                Einen Tag nach dem Treffen der&nbsp;<strong>Ministerpräsidenten und Kanzlerin Merkel</strong>&nbsp;hat
                das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern
                geltenden Bestimmungen beschlossen.
            </p>
            <div id="intxt-1" class="aditem "/>
            <p>
                Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu
                verhindern, wird
                <strong>in Bayern die Corona-Ampel eingeführt.</strong>
            </p>
            <p>
                <strong>Alle Regeln gelten für die Regionen als MUSS-Regeln.</strong> Nicht wie
                bisher als "Kann-Regeln"
            </p>
            <p>
                <span class="greentext"><strong>Grün - Inzidenz bis 35</strong></span>
            </p>
            <ul>
                <li>Allgemeine AHA + L-Regeln (Abstand, Hygiene, Alltagsmaske und Lüften)</li>
                <li>
                    Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit
                    treffen ist erlaubt
                </li>
                <li>
                    Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum
                    Platz
                </li>
                <li>
                    Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind
                    erlaubt
                </li>
            </ul>
            <p>
                <span class="yellowtext"><strong>Gelb - Inzidenz 35 bis 50</strong></span>
            </p>
            <ul>
                <li>
                    Maskenpflicht wird ausgeweitet.
                    <ul>
                        <li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li>
                        <li>Maskenpflicht an Hochschulen</li>
                        <li>in öffentlichen Gebäuden</li>
                        <li>
                            am Arbeitsplatz, wenn der Abstand von 1,5m nicht eingehalten werden kann. Im
                            Betrieb, sobald man den Platz verlässt.
                        </li>
                        <li>Öffentlichen Plätzen, die stark frequentiert sind.</li>
                    </ul>
                </li>
                <li>Allgemeine Sperrstunde ab 23 Uhr</li>
                <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 23 Uhr</li>
                <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li>
                <li>
                    Private Feiern und Treffen sind auf zwei Haushalte oder maximal 10 Personen
                    beschränkt. Egal ob draußen, daheim oder im Lokal.
                </li>
            </ul>
            <p>
                <span class="redtext"><strong>Rot - Inzidenz ab 50</strong></span>
            </p>
            <ul>
                <li>
                    Maskenpflicht wie bei 35-50 und zusätzlich Maskenpflicht auch in der
                    Grundschule
                </li>
                <li>Allgemeine Sperrstunde ab 22 Uhr</li>
                <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr</li>
                <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li>
                <li>
                    Private Feiern und Treffen sind auf 5 Personen oder zwei Haushalte beschränkt.
                    Egal ob draußen, daheim oder im Lokal.
                </li>
            </ul>
            <center>
                Crafted with ❤️from
                <a href="https://www.andre-bellmann.de/?utm_source=social-media&utm_medium=corona&utm_campaign=website">Andre
                    Bellmann</a>
                & <a href="{urlGithub}">Willy Woitas</a><br/>
                <a href="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=*&returnGeometry=false&f=json&outSR=4326&where=GEN%20=%20'BERLIN%20TREPTOW-K%C3%96PENICK'%20OR%20GEN%20=%20'BERLIN%20MITTE'%20OR%20GEN%20=%20'BERLIN%20FRIEDRICHSHAIN-KREUZBERG'%20OR%20GEN%20=%20'BERLIN%20PANKOW'%20OR%20GEN%20=%20'BERLIN%20LICHTENBERG'%20OR%20GEN%20=%20'BERLIN%20MARZAHN-HELLERSDORF'%20OR%20GEN%20=%20'BERLIN%20CHARLOTTENBURG-WILMERSDORF'%20OR%20GEN%20=%20'BERLIN%20STEGLITZ-ZEHLENDORF'%20OR%20GEN%20=%20'BERLIN%20TEMPELHOF-SCH%C3%96NEBERG'%20OR%20GEN%20=%20'BERLIN%20NEUK%C3%96LLN'%20OR%20GEN%20=%20'BERLIN%20REINICKENDORF'%20OR%20GEN%20=%20'BERLIN%20SPANDAU'">Corona
                    Daten basierend auf API von ARCGIS/RKI_LANDKREISE</a>
            </center>
        </div>
    </div>
    <div class="container"/>
</main>
