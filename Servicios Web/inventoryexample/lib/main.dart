import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';



void main() {
  runApp(new MyApp());
}

class MyApp extends StatelessWidget{
  @override 
  Widget build(BuildContext context){
    return new MaterialApp(
    title: "Eduardos App",
    home: new Scaffold(
      appBar: new AppBar(
        
      title: new Center(child: new Text("FlutterApp"),),),
      body: new Center(child: new Text("Welcome Guys")),
    ),
    );
  }



}