import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  data = [{name: "Станок ЧПУ", model: 'AMAN 2030 800W' , img: '../assets/stan.png' , er: 'error1', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'AMAN  800W' , img: '../assets/stan1.png' , er: 'error5', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'AMAN 2030 800W' , img: '../assets/stan.png' , er: 'error1', tamen: '24.04.2020 16:15' , tend: '26.04.2020 20:32'},{name: "Станок ЧПУ", model: 'ERT 560' , img: '../assets/stan2.png' , er: 'error2', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'ERSON 760' , img: '../assets/stan3.png' , er: 'error1', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'AMAN 2030 800W' , img: '../assets/stan.png' , er: 'error1', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'AMAN 2030 800W' , img: '../assets/stan.png' , er: 'error1', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'}];
  constructor() { }

  selected = new FormControl(0);
  category: string;

  ngOnInit() {

  }

}
