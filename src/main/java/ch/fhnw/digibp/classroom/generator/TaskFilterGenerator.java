/*
 * Copyright (c) 2019. University of Applied Sciences and Arts Northwestern Switzerland FHNW.
 * All rights reserved.
 */

package ch.fhnw.digibp.classroom.generator;

import ch.fhnw.digibp.classroom.service.TaskFilterAuthService;
import org.camunda.bpm.engine.FilterService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.filter.Filter;
import org.camunda.bpm.engine.task.TaskQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Map;
import java.util.logging.Logger;

@Component
public class TaskFilterGenerator {

    @Autowired
    private FilterService filterService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private TaskFilterAuthService taskFilterAuthService;

    private final static Logger LOGGER = Logger.getLogger(TaskFilterGenerator.class.getName());

    @PostConstruct
    public void init(){
        if(filterService.createFilterQuery().filterName("My Tasks").singleResult() != null){
            LOGGER.info("Not creating any task filters.");
            return;
        }

        LOGGER.info("Generating task filters");

        Map<String, Object> filterProperties;
        TaskQuery query;
        Filter tasksFilter;

        tasksFilter = filterService.createFilterQuery().filterName("All Tasks").singleResult();
        filterProperties = tasksFilter.getProperties();
        filterProperties.put("refresh", true);
        tasksFilter.setProperties(filterProperties);
        filterService.saveFilter(tasksFilter);
        taskFilterAuthService.createFilterAuthorization(tasksFilter);

        filterProperties.clear();

        filterProperties.put("description", "Tasks assigned to me");
        filterProperties.put("priority", 1);
        filterProperties.put("refresh", true);
        query = taskService.createTaskQuery().taskAssigneeExpression("${currentUser()}");
        tasksFilter = filterService.newTaskFilter().setName("My Tasks").setProperties(filterProperties).setQuery(query);
        filterService.saveFilter(tasksFilter);
        taskFilterAuthService.createFilterAuthorization(tasksFilter);

        filterProperties.clear();

        filterProperties.put("description", "Tasks assigned to my groups");
        filterProperties.put("priority", 2);
        filterProperties.put("refresh", true);
        query = taskService.createTaskQuery().taskCandidateGroupInExpression("${currentUserGroups()}");
        tasksFilter = filterService.newTaskFilter().setName("Group Tasks").setProperties(filterProperties).setQuery(query);
        filterService.saveFilter(tasksFilter);
        taskFilterAuthService.createFilterAuthorization(tasksFilter);

        filterProperties.clear();
    }

}
