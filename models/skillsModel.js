import mongoose,  { Schema } from 'mongoose';

var skillSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    evaluator_instructions :{ 
        type: String,
        required: true,
    },
    candidate_directives :{
        type: String,
        required: true,
    },
    tasks : {
        type: Array,
        required: true,
    }

});

export default mongoose.model('skill', skillSchema);