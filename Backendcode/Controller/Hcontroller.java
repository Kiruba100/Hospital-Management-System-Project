package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Hmodel;
import com.example.demo.Service.Hservice;



@RequestMapping("/")
@RestController
@CrossOrigin
public class Hcontroller {
    @Autowired
    Hservice service;
    
    
    @PostMapping("/post")
    public void book(@RequestBody Hmodel mod) {
    	service.booking(mod);
    }
    
    @GetMapping("/get")
    public List<Hmodel> get(){
    	return service.getdet();
    }
}