import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  List data;
  String uri = "http://api.themoviedb.org/3/discover/movie?api_key=869ffcc1b93389593e8971c48a57e27e";
  Future<String> getmovies() async {
    var response = await http.get(Uri.encodeFull(uri));

    setState(() {
      var jsondecode = jsonDecode(response.body);
          data      = jsondecode["results"];
    });

    print(data[0]["title"]);
    return "success";
  }

  @override
  void initState() {
    super.initState();
    this.getmovies();
  }
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text("Movie Api"),
        ),
        body: new ListView.builder(
          itemCount: data == null ? 0 : data.length,
          itemBuilder: (BuildContext context,i) {
            return ListTile(
              title: new Text(data[i]["title"]),
              subtitle: new Text(data[i]["overview"]),
              leading: new CircleAvatar(
                radius: 5.0,
                backgroundColor: Colors.blue,
              ),
              trailing: new Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  new Text("Release-Date \n ${data[i]["release_date"]}",style: new TextStyle(color: Colors.green,fontSize: 10.0)),
                  new SizedBox(height: 5.0,),
                  new Text("Vote ${data[i]["vote_average"]}",style: new TextStyle(color: Colors.red,fontSize: 15.0),)
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}