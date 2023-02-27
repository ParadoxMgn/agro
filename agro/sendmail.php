<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/Exception.php";
require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/SMTP.php";

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
$mail->isSMTP();
$mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
$mail->SMTPAuth   = true;
$mail->Username   = 'paradox457@yandex.ru'; // Логин на почте
$mail->Password   = 'jccddyiqvvgpcfct'; // Пароль на почте
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port       = 465;

$mail->setFrom('paradox457@yandex.ru', 'Почта№1');

$mail->addAddress('radoxmgn@gmail.com');

$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/');
$mail->IsHTML(true);



$mail->Subject = 'Отправка с формы!';

$body = '<h1>Мое письмо</h1>
         <p>' . $_POST['firstName'] . '</p>
         <p>' . $_POST['lastName'] . '</p>
         <p>' . $_POST['companyName'] . '</p>
         <p>' . $_POST['eMail'] . '</p>
         <p>' . $_POST['phone'] . '</p>
         <p>' . $_POST['webSite'] . '</p>
         <p>' . $_POST['textArea'] . '</p>';

$mail->Body = $body;

if ($mail->send()) {
  $message = 'Данные отправлены';
} else {
  $message = 'Ошибка';
}

$response = ['message' => $message];

header ('ContentType: application/json');
echo json_encode ($response);
