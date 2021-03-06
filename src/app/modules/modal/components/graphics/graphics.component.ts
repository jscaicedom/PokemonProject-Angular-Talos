import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import AppState from 'src/app/ngrx/pokemons.state';
import { Store, select } from '@ngrx/store';
import { selectFromStore } from '../../../../ngrx/selectors/pokemons.selectors';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
})
export class GraphicsComponent implements OnInit {
  state$: Observable<AppState>;
  pokemonSubscription: Subscription;

  public chartType: string = 'bar';
  public chartDatasets: Array<{ data: number[] }>;
  public chartLabels: Array<string>;
  public chartColors = [
    {
      backgroundColor: [
        'rgba(56,120,107,0.5)',
        'rgba(70,120,107,0.5)',
        'rgba(80,120,107,0.5)',
        'rgba(90,120,107,0.5)',
        'rgba(100,120,107,0.5)',
        'rgba(110,120,107,0.5)',
      ],
      borderColor: [
        'rgba(56,120,107,1)',
        'rgba(70,120,107,1)',
        'rgba(80,120,107,1)',
        'rgba(90,120,107,1)',
        'rgba(100,120,107,1)',
        'rgba(110,120,107,1)',
      ],
      borderWidth: 2,
    },
  ];

  public chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Stats',
      fontSize: 20,
      fontColor: 'black',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  constructor(private store: Store<{ state: AppState }>) {}

  ngOnInit(): void {
    this.pokemonSubscription = this.store
      .pipe(select(selectFromStore))
      .subscribe((state) => {
        this.chartLabels = state.selectedPokemons.stats.map((stat) => {
          return stat.stat.name;
        });
        this.chartDatasets = [
          {
            data: state.selectedPokemons.stats.map((stat) => {
              return stat.base_stat;
            }),
          },
        ];
        if (state.isCompared) {
          this.chartDatasets.push({
            data: state.pokemonToCompare.stats.map((stat) => {
              return stat.base_stat;
            }),
          });
          this.chartColors.push({
            backgroundColor: [
              'rgba(56,80,107,0.5)',
              'rgba(70,80,107,0.5)',
              'rgba(80,80,107,0.5)',
              'rgba(90,80,107,0.5)',
              'rgba(100,80,107,0.5)',
              'rgba(110,80,107,0.5)',
            ],
            borderColor: [
              'rgba(56,80,107,1)',
              'rgba(70,80,107,1)',
              'rgba(80,80,107,1)',
              'rgba(90,80,107,1)',
              'rgba(100,80,107,1)',
              'rgba(110,80,107,1)',
            ],
            borderWidth: 2,
          });
        }
      });
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }
}
