var gulp         = require('gulp'),
    sass         = require('gulp-sass'), //Подключаем Sass пакет
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов


gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('working/scss/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('working/css')) // Выгружаем результата в папку working/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'working' // Директория для сервера - working
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'working/libs/jquery/dist/jquery.min.js', // Берем jQuery
        'working/libs/slick-carousel/slick/slick.js' // Берем Slick slider
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('working/js')); // Выгружаем в папку working/js
});


gulp.task('css-libs', ['sass'], function() {
    return gulp.src('working/css/libs.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('working/css')); // Выгружаем в папку app/css
});


gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('working/scss/**/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('working/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('working/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});