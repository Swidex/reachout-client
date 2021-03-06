declare var require: any
import { Component, OnInit } from '@angular/core';
var messages = require('./messages.json');
var classes = require('../home/classes.json');

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

  constructor() { }

  public messages = require('./messages.json');

  public showedMessages = [];

  ngOnInit() {

  var urlParams = new URLSearchParams(window.location.search);

  var classID = urlParams.get('id');

  this.showedMessages = messages.filter(({superID}) => superID == classID);
  console.log(this.showedMessages);

  for (var i=0; i<classes.length; i++)
    {
      if (classes[i].id = classID)
      {
        var classTitleStorage = localStorage.getItem(classID);
        classTitleStorage = JSON.parse(classTitleStorage);
        var classTitle = String(classTitleStorage['name']);
        console.log(classTitle);
        document.getElementById("classTitle").innerHTML = classTitle;
      }

      break;
    
    }

  }

}


