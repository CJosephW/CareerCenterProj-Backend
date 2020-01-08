import express, { Router } from 'express';
import Skill from './models/skillsModel'
import { index } from './controllers/students';

const router = Router();

router.route('/students.json').get(index);

router.route('/skills')
    .post((req, res) => {
        console.log(req.body);

        res.json(req.body);

        var myData = new Skill();
        myData.title = req.body.title;
        myData.evaluator_instructions = req.body.evaluator_instructions;
        myData.cadidate_directives = req.body.cadidate_directives;
        myData.tasks = req.body.tasks;
        myData.save()
        .then(item =>{
            res.send("Item saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database")
        })

    })
    .get(async(req, res)=>{
        try{
            const found_skills = await Skill.find()
            res.json(found_skills)
        } catch(err){
            res.status(500).json({message: err.message})
        }
    });


export default router;
