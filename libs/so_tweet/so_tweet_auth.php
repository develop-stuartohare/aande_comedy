<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();

require_once("twitteroauth/twitteroauth.php");

function so_get_tweets($twitteruser, $notweets, $consumerkey, $consumersecret, $accesstoken, $accesstokensecret)
{
    $connection = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

    $tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);   
    
    return json_encode($tweets);
}
