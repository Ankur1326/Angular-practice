import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Reactive Extensions for JavaScript

@Injectable({
 providedIn: 'root'
})
export class approvalService {

 private approvalStageMessage = new BehaviorSubject('Basic Approval is required!');
 currentApprovalStageMessage = this.approvalStageMessage.asObservable();

 constructor() {

 }
 updateApprovalMessage(message: string) {
 this.approvalStageMessage.next(message)
 }
}