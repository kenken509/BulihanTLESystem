<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizQuestion extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function quiz(){
        return $this->belongsTo(Quiz::class,'quiz_id','id');
    }

    public function choices(){
        return $this->hasOne(QuizChoices::class,'quiz_question_id', 'id'); 
    }
}
