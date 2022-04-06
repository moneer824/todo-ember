import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action, get, set } from '@ember/object';

export default class TaskFormService extends Service {
  @tracked text = '';
  @tracked tasks = [
    { info: 'work', completed: false },
    { info: 'watching movie', completed: false },
  ];

  @action
  addtask() {
    // preventDefault()
    this.tasks.pushObject({ info: this.text, completed: false });
   
  }
  @action
  delete(task) {
    this.tasks.removeObject(task);
  }
}
