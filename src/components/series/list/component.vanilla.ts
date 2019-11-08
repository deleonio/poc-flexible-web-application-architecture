import { ListSerieController } from './controller';

function render($ctrl: any) {
  let html = `<div>
  <h5>List</h5>
  <div>
    <button class="btn btn-success" id="add" type="button">
      Add
    </button>
    <button class="btn btn-info" id="start" type="button" ng-if="$ctrl.showPerformanceButton">
      Performance
    </button>
  </div>`;
  $ctrl.elements.forEach((element: any, index: number) => {
    html += `<table class="table" key="${index}">
     <thead>
       <tr>
         <th scope="col">#</th>
         <th scope="col">ID</th>
         <th scope="col">Title</th>
         <th scope="col">Unit</th>
         <th scope="col">Action</th>
       </tr>
     </thead>
     <tbody>`;
    $ctrl.measuredSeries.forEach((serie: any, index2: number) => {
      html += `<tr key="${index2}">
      <td>${index2 + 1}</td>
      <td>{{ serie.getId() }}</td>
      <td>{{ serie.getTitle() }}</td>
      <td>{{ serie.getUnit() }}</td>
      <td>
        <button class="btn btn-info" id="edit-{{$index}}" type="button">
          Edit
        </button>
      </td>
    </tr>`;
    });
    html += `
     </tbody>
   </table>`;
  });
  html += `<small>Duration: {{ $ctrl.duration }} ms</small>
  </div>`;
}

class ListSerieComponent extends HTMLElement {
  private readonly $ctrl: ListSerieController = new ListSerieController();

  constructor() {
    super();
    this.attachShadow({ delegatesFocus: true, mode: 'open' });
    this.render();
  }

  private render() {
    this.shadowRoot.innerHTML = render(this.$ctrl);
    this.shadowRoot.querySelector('#add').addEventListener('click', this.$ctrl.add);
    this.shadowRoot.querySelector('#start').addEventListener('click', this.$ctrl.onStart);
  }
}
customElements.define('wc-list-serie', ListSerieComponent);
