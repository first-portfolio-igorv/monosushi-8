import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  constructor(
    private ProductService:ProductService
  ) { }
  ngOnInit(): void {
    this.getAll()
  }

  public addBlockCheck=false;
  public saveCheck=false;
  public name!:string;
  public components!:string;
  public category!:string;
  public path!:string;
  public price!:string;
  public weight!:string;
  public img!:string;
  public id!:number;
  public productStorage!:ProductResponse[];
  addBlock(){
    this.addBlockCheck=!this.addBlockCheck;
  }
  clear(){
    this.name="";
    this.components="";
    this.category="";
    this.path="";
    this.price="";
    this.weight="";
    this.img="";
  }
  getAll(){
    this.ProductService.getAll().subscribe(info=>{
      this.productStorage=info;
    })
  }
  add(){
    let info={
      name:this.name,
      components:this.components,
      path:this.path,
      price:this.price,
      category:this.category,
      weight:this.weight,
      img:this.img
    }
    this.ProductService.add(info).subscribe(()=>{
      this.getAll()
      this.clear()
    });
  }
  edit(info:ProductResponse){
    this.saveCheck=true;
    this.name=info.name;
    this.components=info.components;
    this.category=info.category;
    this.path=info.path;
    this.price=info.price;
    this.weight=info.weight;
    this.img=info.img;
    this.id=info.id;
  }
  save(){
    let info={
      name:this.name,
      components:this.components,
      path:this.path,
      price:this.price,
      category:this.category,
      weight:this.weight,
      img:this.img
    }
    this.ProductService.edit(info,this.id).subscribe(()=>{
      this.getAll();
      this.clear();
      this.saveCheck=false;
    })
  }
  delete(info:ProductResponse){
    this.ProductService.delete(info.id).subscribe(()=>{
      this.getAll()
    })
  }
}
