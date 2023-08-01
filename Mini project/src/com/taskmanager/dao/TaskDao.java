package com.taskmanager.dao;

import java.util.List;

import com.taskmanager.model.Task;
//abstraction
public interface TaskDao {
    void addTask(Task task);

    List<Task> getAllTasks();

    void markTaskAsCompleted(int taskId);

	
}