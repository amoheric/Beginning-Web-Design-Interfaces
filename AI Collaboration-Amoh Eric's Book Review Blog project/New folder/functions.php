<?php
function my_theme_scripts() {
    wp_enqueue_style('main-css', get_stylesheet_uri());
    wp_enqueue_script('main-js', get_template_directory_uri() . '/script.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'my_theme_scripts');
