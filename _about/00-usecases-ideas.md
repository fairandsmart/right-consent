---
title: Integrate Consent in Existing Form
permalink: /about/usecase-1/
toc: true
---

TODO

TODO ideas :

## I want to conduct a survey on diets

my form:
  - information with contact information (data collector) & privacy policy of my survey organisation
  - processing 1 to allow collecting & using "demographic" personal data (data: age, gender, job category...)
  - processing 2 to allow using survey answers (data: the survey answers)
  - preference 1 to select preferred communication channel (if any) to get updates on the survey

if the visitor accepted one or both processings, I can then show them the survey

## I want to have players agree to my terms of use before accessing the little game I put on my website

my form:
  - conditions 1 with my terms of use

when somebody wants to play my game, they accept the terms of use, then the callback redirects them to the game (?) or I interrogate the records database when they try to log in my game

## I am a teacher organizing a school trip for my students

my form:
  - information with contact information (data collector) & privacy policy of my school
  - processing 1 where parents accept to send their child to the trip (/!\ no data collected, does it still count as processing ?)
  - processing 2 where parents allow sharing relevant medical data with the teachers (e.g. allergies) (check the box "medical data" when creating the processing)

after all parents answered my form, I go to the Interrogate page and export as CSV the list of parents who accepted processing 1 to know which students will go on the trip
then I export as CSV the list of parents who accepted to share medical data and use it to ask the infirmary for the students' medical information or whatever

## I am a professional photographer and I want to use my customers' photos in my online portfolio

my form:
  - information with contact information (data collector) & privacy policy of my photo studio
  - processing 1 to allow me to display the customer's portraits I took for them on my website (data: the portrait)

after taking a customer's photo, I generate the form in the backoffice (no integration = no developing skills needed, subject ID is firstname.lastname) on my work computer and have them select their choice
they receive a confirmation email with a QR code to change their mind
most of my clients are old and not savvy so if they change their mind, they can also call me on their phone or come to the studio and I change their consent on the operator interface

even simpler version for people who really hate technology : no form generated, I print out the information + processing on paper for them to read and accept/reject, then on my computer, I register them manually as users and submit their answer as operator, they can still change their mind later
