package com.atos.newhire.backend.api;

import com.atos.newhire.backend.model.Person;
import com.atos.newhire.backend.service.PersonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/v1/person")
@CrossOrigin("*")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping("/add-person")
    public void addPerson(@RequestBody Person person) throws IOException {
        personService.addPerson(person);
    }

    @GetMapping("/current-person")
    public Person getCurrentPerson(){
        return personService.getCurrentPerson();
    }

    @GetMapping("/view-all")
    public List<Person> getAllPeople() {
        return personService.getAllPeople();
    }

    @RequestMapping(value = {"/empty-forms/{filename}"}, method = RequestMethod.GET, produces = "application/pdf")
    public ResponseEntity<StreamingResponseBody> getEmptyForms(@PathVariable String filename) throws IOException {
        return personService.getForms(filename, true);
    }

    @RequestMapping(value = {"/filled-forms/{filename}"}, method = RequestMethod.GET, produces = "application/pdf")
    public ResponseEntity<StreamingResponseBody> getFilledForms(@PathVariable String filename) throws IOException {
        return personService.getForms(filename, false);
    }
}
