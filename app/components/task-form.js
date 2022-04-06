import Component from '@glimmer/component';
import { action, get, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
export default class TaskFormComponent extends Component {

  // @service('task-form') form;
  @service taskForm;
  
  @tracked text = '';
 
  @tracked taskStatus = 'All';

  get currenTasks() {
    if (this.taskStatus === 'All') {
      return this.taskForm.tasks;
    } else if (this.taskStatus === 'completed') {
      return this.taskForm.tasks.filter((task) => task.completed);
    } else {
      return this.taskForm.tasks.filter((task) => task.completed === false);
    }
  }
  @action
  find(task) {
    // task.completed = !task.completed;
    // this.tasks =  this.tasks
    
    set(task, 'completed', !task.completed);
    this.taskStatus = this.taskStatus;
  }

  @action
  newtext(event) {
    this.taskForm.text = event.target.value;
  }

  @action
  states(value) {
    this.taskStatus = value;
  }
 
}
