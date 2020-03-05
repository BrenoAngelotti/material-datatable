import {Component} from '@angular/core';

const ALL_DATA = {
  acreditations: [
    {
      name: 'Acreditado',
      data:[
        {
          answer: [
            {
              name: 'Supera',
              color: '#084B1D'
            }, 
            {
              name: 'Conforme', 
              color:'#229E46'
            }
          ], 
          level1: '≥ 70%', 
          level2: '', 
          level3: '',
          levels:[['≥ 70%', 'Nível 1'], ['', 'Nível 2'], ['', 'Nível 3']]
        },
        {
          answer: [
            {
              name: 'Parcial conforme',
              color: '#E4DE24'
            }
          ], 
          level1: '≤ 20%', 
          level2: '', 
          level3: '',
          levels:[['≤ 20%', 'Nível 1'], ['', 'Nível 2'], ['', 'Nível 3']]
        },
        {
          answer: [
            {
              name: 'Não conforme',
              color: '#DA7374'
            }
          ], 
          level1: '≤ 10%', 
          level2: '', 
          level3: '',
          levels:[['≤ 10%', 'Nível 1'], ['', 'Nível 2'], ['', 'Nível 3']]
        }
      ]
    },
    {
      name: 'Acreditado Pleno',
      data:[
        {
          answer: [
            {
              name: 'Supera',
              color: '#084B1D'
            }, 
            {
              name: 'Conforme', 
              color:'#229E46'
            }
          ], 
          level1: '≥ 80%', 
          level2: '≥ 70%', 
          level3: '',
          levels:[['≥ 80%', 'Nível 1'], ['≥ 70%', 'Nível 2'], ['', 'Nível 3']]
        },
        {
          answer: [
            {
              name: 'Parcial conforme',
              color: '#E4DE24'
            }
          ], 
          level1: '≤ 20%', 
          level2: '≤ 20%', 
          level3: '',
          levels:[['≤ 20%', 'Nível 1'], ['≤ 20%', 'Nível 2'], ['', 'Nível 3']]
        },
        {
          answer: [
            {
              name: 'Não conforme',
              color: '#DA7374'
            }
          ],
          level1: '0%', 
          level2: '≤ 10%', 
          level3: '',
          levels:[['0%', 'Nível 1'], ['≤ 10%', 'Nível 2'], ['', 'Nível 3']]
        }
      ]
    },
    {
      name: 'Acreditado com Excelência',
      data:[
        {
          answer: [
            {
              name: 'Supera',
              color: '#084B1D'
            }, 
            {
              name: 'Conforme', 
              color:'#229E46'
            }
          ], 
          level1: '≥ 90%', 
          level2: '≥ 80%', 
          level3: '≥ 70%',
          levels:[['≥ 90%', 'Nível 1'], ['≥ 80%', 'Nível 2'], ['≥ 70%', 'Nível 3']]
        },
        {
          answer: [
            {
              name: 'Parcial conforme',
              color: '#E4DE24'
            }
          ], 
          level1: '≤ 10%', 
          level2: '≤ 20%', 
          level3: '≤ 20%',
          levels:[['≤ 10%', 'Nível 1'], ['≤ 20%', 'Nível 2'], ['≤ 20%', 'Nível 3']]
        },
        {
          answer: [
            {
              name: 'Não conforme',
              color: '#DA7374'
            }
          ], 
          level1: '0%', 
          level2: '0%', 
          level3: '≤ 10%',
          levels:[['0%', 'Nível 1'], ['0%', 'Nível 2'], ['≤ 10%', 'Nível 3']]
        }
      ]
    }
  ]
}

@Component({
  selector: 'acreditation-table',
  styleUrls: ['acreditation-table.css'],
  templateUrl: 'acreditation-table.html',
})

export class AcreditationTable {
  displayedColumns: string[] = ['answer', 'level1', 'level2', 'level3', 'menu'];
  dataSource = ALL_DATA;
}