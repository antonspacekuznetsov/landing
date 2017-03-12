<?php
die();
require ('vendor/autoload.php');

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'centerteplic@yandex.ru';                 // SMTP username
$mail->Password = '123qq123qq';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->CharSet = 'UTF-8';

$mail->setFrom('centerteplic@yandex.ru', 'Расчет стоимости теплицы с сайта!!!');

$mail->addAddress("as.ky@ya.ru");


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая заявка с сайта';

if (isset($_POST['one_phone']))
{
	$message = "<table><tr><td>Купить в один клик</td><td></td></tr>
	<tr><td>Телефон</td><td>".$_POST['one_phone']."</td></tr>
	</table>";
}
if (isset($_POST['phone']))
{
$message ="<table><tr><td>Имя</td><td>".$_POST['name']."</td></tr>
<tr><td>Телефон</td><td>".$_POST['phone']."</td></tr>
<tr><td>E-mail</td><td>".$_POST['email']."</td></tr>
<tr><td>Адрес</td><td>".$_POST['adres']."</td></tr>
<tr><td>Промокод</td><td>".$_POST['promo']."</td></tr>
<tr><td>Цена</td><td>".$_POST['price']."</td></tr>
</table>";
}
if (isset($_POST['FNAME']))
{
	$message = "<table><tr><td>Подписка</td><td></td></tr>
	<tr><td>Имя</td><td>".$_POST['FNAME']."</td></tr>
	<tr><td>E-mail</td><td>".$_POST['EMAIL']."</td></tr>
	</table>";
}
$mail->Body    = $message;

$mail->send();
echo "ok";

?>