import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  getLists() {
    return this.webRequestService.get('lists')
  }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webRequestService.post('lists', { title })
  }

  getTasks(listId: string) {
    return this.webRequestService.get(`lists/${listId}/tasks`)
  }

  createTask(title: string, listId: string) {
    // We want to send a web request to create a task
    return this.webRequestService.post(`lists/${listId}/tasks`, { title })
  }

  complete(task: Task) {
    return this.webRequestService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    })
  }
}
