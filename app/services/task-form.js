import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TaskFormService extends Service {
    @tracked tasks = [
        { info: 'work', completed: false },
        { info: 'watching movie', completed: false },
      ];
}
