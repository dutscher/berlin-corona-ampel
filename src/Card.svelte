<script>
  import { city } from '../package.json';
  export let data;
  export let hmrUnit;
  let warningclass = 'warning';

  if (data.cases7_per_100k <= 35) {
    warningclass = 'info';
  }

  if (data.cases7_per_100k >= 50) {
    warningclass = 'danger';
  }
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    padding: 1rem;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    user-select: none;
  }

  @media (min-width: 768px) {
    .card {
      width: 40%;
    }
  }

  @media (min-width: 1024px) {
    .card {
      width: 30%;
    }
  }

  .card__row {
    background-color: var(--card-bg);
    color: var(--card-color);
    display: flex;
    align-items: center;
    padding: 0.5rem;
    flex-shrink: 0;
  }

  .card__row--full {
    flex-grow: 1;
  }

  .card__column {
    width: 50%;
  }

  .card__number {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    padding-right: 1rem;
    font-weight: 500;
    text-align: right;
  }

  .card__area {
    font-size: 0.7rem;
  }

  .card__city {
    font-size: 1.4rem;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .card__cases {
    text-align: center;
    font-size: 0.5rem;
    width: 100%;
  }
</style>

<div class='card'>
  <div class={`card__row card__row--full ${warningclass}`}>
    <div class="card__column">
      <h3 class="card__number">{Number(data.cases7_per_100k).toFixed(2)}</h3>
    </div>
    <div class="card__column">
      <div class="card__city">{data.GEN.replace(city + '', '')}</div>
    </div>
  </div>
  <div class="card__row">
    <div class="card__cases">
        Einwohner: <strong>{hmrUnit(data.EWZ)}</strong> | Fälle insgesamt: <strong>{hmrUnit(data.cases)}</strong> | Tote: <strong>{hmrUnit(data.deaths)}</strong>
    </div>
  </div>
</div>
