'use strict';
var app = angular.module('app', ['pascalprecht.translate']);
  app.config(function ($translateProvider) {
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en', 'ru'],{
		'en_*':'en',
		'ru_*':'ru'
    })
    $translateProvider.translations('en', {
		WELCOME:"Welcome to the website Assembler Calculator",
		TEXT_1:"The calculator is intended for calculations that are used iIn programming. You can easily calculate decimal, hexadecimal, octal, and binary numbers. In addition to addition, subtraction, division and multiplication, there are also logical operations: XOR, OR, AND, NOT. The program has logical tables and a number system.",
		TEXT_2:"The application is designed for computing, in which you can add, subtract, multiply and divide decimal, hexadecimal, octal and binary numbers. At the end of the number is the appropriate letter indicating the type of input.",
		TYPE_NUMBER:"Designations types of numbers:",
		TYPE_HEX:"hexadecimal;",
		TYPE_DEC:"decimal;",
		TYPE_OCT:"octal;",
		TYPE_BIN:"binary;",
		TEXT_3:"Mathematical operations can be performed as one, and for different types of numbers. The results are displayed in four versions, in: decimal, hexadecimal, octal and binary number systems. In the navigation bar, choice of output provided answers. In addition to mathematical operations and provides logical operations XOR, OR, AND and NOT.",
		TEXT_4:"In the navigation bar, in addition to the instructions in the help of logical operations there are tables and table number systems.",
		TEXT_5:"Free and Affordable Program",
		LINK_YOU_TUBE:"https://www.youtube.com/embed/-acI9A06Xzs?rel=0",
		
		BUTTON_LANG_EN:"english",
		BUTTON_LANG_RU:"русский"
    });
    $translateProvider.translations('ru', {
		WELCOME:"Добро Пожаловать на сайт Ассемблер Калькулятор",
		TEXT_1:"Калькулятор предназначен для вычислений, которые используются в программировании. Вы можете легко и быстро посчитать десятичные, шестнадцатеричные, восьмеричные и двоичные числа. Кроме сложения, вычетания, деления и умножения, имеются и логические операции: XOR, OR, AND, NOT. В программе есть Логические таблицы и таблица Систем счисления.",
		TEXT_2:"Приложение предназначено для компьютерных вычислений, в котором можно складывать, вычитать, умножать и делить десятичные, шестнадцатеричные, восьмеричные и двоичные числа. В конце числа стоит соответствующая буква обозначающая тип вводимого числа.",
		TYPE_NUMBER:"Обозначения типов чисел:",
		TYPE_HEX:"шестнадцатеричное;",
		TYPE_DEC:"десятичное;",
		TYPE_OCT:"восьмеричное;",
		TYPE_BIN:"двоичное;",
		TEXT_3:"Математические действия можно производить, как и для одного, так и для разных типов чисел. Результат выводится в четырех вариантах, в: десятичной, шестнадцатеричной, восьмеричной и двоичной системах счисления. В панели навигации предусмотрен выбор вывода ответов. Кроме математических действий предусмотрены и логические действия XOR, OR, AND и NOT.",
		TEXT_4:"В панели навигации, кроме инструкции, в помощь есть таблицы логических операций и таблица систем счисления.	",
		TEXT_5:"Программа Бесплатная и Доступная",
		LINK_YOU_TUBE:"https://www.youtube.com/embed/pmDE8SLjhqo?rel=0",
			
		BUTTON_LANG_EN:"english",
		BUTTON_LANG_RU:"русский"
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
    
  });
  app.controller('Ctrl',['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function(key){
		$translate.use(key);
    };
  }]);


	