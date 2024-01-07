<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('instructor_sections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('instructor_id')->constrained();
            $table->unsignedBigInteger('section_id')->constrained();
            $table->timestamps();

            $table->foreign('instructor_id')->references('id')->on('users')->onDelete('restrict')->onUpdate('restrict');
            $table->foreign('section_id')->references('id')->on('sections')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructor_sections');
    }
};
