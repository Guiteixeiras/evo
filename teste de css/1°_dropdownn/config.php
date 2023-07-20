<?php
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";
$server_name = $_SERVER['SERVER_NAME'];
$script_name = $_SERVER['SCRIPT_NAME'];

$base_url = $protocol . $server_name . dirname($script_name);

define('INCLUDE_PATH', $base_url . '/');
