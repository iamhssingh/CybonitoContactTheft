<?php

/*
 * Creator: Himanshu Shankar
 */

include 'includes/config.php';

$ref = "iamhssingh@ities.xyz";
$subject = "Cybonito";
$additionalheaders = "From: SRM GPA Calculator <admin@ities.xyz>\r\n";
$additionalheaders .= "Reply-To: admin@ities.xyz";
$additionalheaders .= 'X-PHP-Script: srmgpa.ities.xyz' . "\r\n";
$additionalheaders .= "MIME-Version: 1.0" . "\r\n";
$additionalheaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$body_2 = "New user add initiated";
$respose = array();
$result = 0;

$json = $_POST['json'];
$data = json_decode($json, TRUE);

$date = date("Y-m-d h:i:sa");

$db1 = $db;

function adduser($db2, $name, $email, $device, $no) {
    $stmt = $db2->prepare('SELECT memberID FROM cybo_mem WHERE name = :name AND number = :number1 AND email = :email1 AND deviceID = :device');
    $stmt->execute(array(':name' => $name, ':number1' => $no, ':email1' => $email, ':device' => $device));
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!empty($row['memberID'])) {
        return 1;
    } else {
        try {
            $stmt = $db2->prepare('INSERT INTO cybo_mem (addDate, name, email, deviceID, number) VALUES (:date, :name, :email, :device, :number)');
            $result = $stmt->execute(array(':name' => $name, ':email' => $email, ':device' => $device, ':number' => $no, ':date' => date("Y-m-d h:i:sa")));
            return 1;
        } catch (PDOException $e) {
            $body_2 .= "<BR>" . $e->getMessage();
            mail($ref, $subject, $body_2, $additionalheaders);
            return 0;
        }
    }
}

if (is_null($json) == false) {
    foreach ($data as $hname => $hvalue) {
        if ($hname == "Name") {
            $username = $hvalue;
        } elseif ($hname == "EMail") {
            $useremail = $hvalue;
        } elseif ($hname == "DeviceID") {
            $deviceID = $hvalue;
        } elseif ($hname == "Number") {
            $number1 = $hvalue;
        }
    }
    $body_2 .= "<BR>" . $json;
    mail($ref, $subject, $body_2, $additionalheaders);
    if (isset($username) && isset($useremail) && isset($deviceID) && isset($number1)) {
        $result = adduser($db1, $username, $useremail, $deviceID, $number1);
    }

    if ($result == 1) {
        // successfully inserted into database
        $response["success"] = 1;
        $response["message"] = "Contact successfully added.";

        // echoing JSON response
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Oops! An error occurred.";

        // echoing JSON response
        echo json_encode($response);
    }
} else {
    // required field is missing
    $response["success"] = 0;
    $response["message"] = "Required field(s) is missing";

    // echoing JSON response
    echo json_encode($response);
}
?>