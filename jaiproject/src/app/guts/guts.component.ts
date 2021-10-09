import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guts',
  templateUrl: './guts.component.html',
  styleUrls: ['./guts.component.css']
})
export class GutsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bestGuts=[{name:"dora",color:'red',img: "https://www.w3schools.com/html/img_girl.jpg",link:"https://www.amazon.in/"},
            {name:"jai",color:'blue',img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU",link:"https://www.google.in/"},
            {name:"ram",color:'green',img: "https://lh3.googleusercontent.com/WdlDFmoF31bp4SM0mbME-96mDsclU736LJ0FfHuowlIyaIl8fQlQ2zKtJIz7qnmLnOWLEw=s128",link:"https://twitter.com/?lang=en"},
            {name:"kiran",color:'yellow',img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Wjd-Cak78mooEfHTx64D7xhFtgBMZRFiiQ&usqp=CAU",link:"https://www.facebook.com/"},
            {name:"sathi",color:'cyan',img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5qOGfbuI54-M-OUxaor3Vbo7ZeeUzbFJbA&usqp=CAU",link:"https://telegram.org/"},

  ]

}
