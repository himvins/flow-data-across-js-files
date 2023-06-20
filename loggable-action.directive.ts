import { Directive, HostListener } from '@angular/core';
import { ActionLoggingService } from 'path-to-action-logging.service';

@Directive({
  selector: '[loggableAction]'
})
export class LoggableActionDirective {
  constructor(private actionLoggingService: ActionLoggingService) {}

  @HostListener('*')
  onAction() {
    const action = this.getMethodName();
    this.actionLoggingService.logAction(action);
  }

  private getMethodName(): string {
    // Dynamically retrieve the method name being executed
    const stack = new Error().stack;
    const callerLine = stack?.split('\n')[3] || '';
    const methodName = callerLine.match(/at\s+(\w+)/)?.[1] || '';
    return methodName;
  }
}
