<?php
/**
 * Registers menus.
 * 
 * @return void
 */
function hnjs_register_menus() {
  register_nav_menus(
    array(
      'primary' => __( 'Primary' )
    )
  );
}
add_action( 'after_setup_theme', 'hnjs_register_menus' );

/**
 * Sets up theme features.
 * 
 * @return void
 */
function hnjs_theme_setup() {
  add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'hnjs_theme_setup' );

/**
 * Replaces the home URL with the site URL in the REST API URL.
 * It fixes the error on /wp-admin when API is trying to use the wrong domain.
 * 
 * @param string $url The original REST API URL.
 * @return string The modified REST API URL.
 */
function hnjs_replace_rest_url( $url ) {
  $url = str_replace( home_url(), site_url(), $url );

  return $url;
}
add_filter( 'rest_url', 'hnjs_replace_rest_url' );
