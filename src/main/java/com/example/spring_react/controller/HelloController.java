package com.example.spring_react.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public ResponseEntity<?> helloWorld() {
        HashMap<String, String> map = new HashMap<>();
        map.put("data", "Hello World");
        return ResponseEntity.ok(map);
    }
}
