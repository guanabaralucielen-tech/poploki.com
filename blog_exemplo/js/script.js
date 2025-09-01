{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Menu mobile toggle\
document.addEventListener('DOMContentLoaded', function() \{\
    const mobileMenu = document.getElementById('mobile-menu');\
    const mainNav = document.getElementById('main-nav');\
    \
    if (mobileMenu && mainNav) \{\
        mobileMenu.addEventListener('click', function() \{\
            mainNav.classList.toggle('active');\
        \});\
    \}\
    \
    // Newsletter form submission\
    const newsletterForm = document.querySelector('.newsletter-form');\
    if (newsletterForm) \{\
        newsletterForm.addEventListener('submit', function(e) \{\
            e.preventDefault();\
            alert('Obrigado por assinar nossa newsletter! Em breve voc\'ea receber\'e1 nossas novidades.');\
            this.reset();\
        \});\
    \}\
\});}