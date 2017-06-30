<?php

/*
 * Created by: Himanshu Shankar
 */

include 'includes/config.php';

$ref = "test@test.test";
$subject = "Cybonito";
$additionalheaders = "From: SRM GPA Calculator <admin@test.test>\r\n";
$additionalheaders .= "Reply-To: admin@test.test";
$additionalheaders .= 'X-PHP-Script: srmgpa.test.test' . "\r\n";
$additionalheaders .= "MIME-Version: 1.0" . "\r\n";
$additionalheaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$body_2 = "New contact add initiated";
$respose = array();
$result = 0;

$filename = __DIR__ . DIRECTORY_SEPARATOR . "jsontest.txt";

$json = $_POST['json'];
$data = json_decode($json, TRUE);

$memID = 1;
$date = date("Y-m-d h:i:sa");

function addcont($db2, $mem, $name, $no1, $no2, $email1, $email2, $det) {
    $ref = "test@test.test";
    $subject = "Cybonito";
    $additionalheaders = "From: SRM GPA Calculator <admin@test.test>\r\n";
    $additionalheaders .= "Reply-To: admin@test.test";
    $additionalheaders .= 'X-PHP-Script: srmgpa.test.test' . "\r\n";
    $additionalheaders .= "MIME-Version: 1.0" . "\r\n";
    $additionalheaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $body_2 = "New contact add initiated";
    $stmt = $db2->prepare('SELECT contID FROM cybo_cont WHERE memID = :memID AND contName = :name AND contNumber1 = :number1 AND contNumber2 = :number2 AND contEmail1 = :email1 AND contEmail2 = :email2 AND contDetail = :detail');
    $stmt->execute(array(
        ':memID' => $mem,
        ':name' => $name,
        ':number1' => $no1,
        ':number2' => $no2,
        ':email1' => $email1,
        ':email2' => $email2,
        ':detail' => $det
    ));
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!empty($row['contID'])) {
        return 1;
    } else {
        try {
            $stmt = $db2->prepare('INSERT INTO cybo_cont (memID, contName, contNumber1, contNumber2, contEmail1, contEmail2, contDetail, addDate) VALUES (:memID, :name, :number1, :number2, :email1, :email2, :detail, :date)');
            $result = $stmt->execute(array(
                ':memID' => $mem,
                ':name' => $name,
                ':number1' => $no1,
                ':number2' => $no2,
                ':email1' => $email1,
                ':email2' => $email2,
                ':detail' => $det,
                ':date' => date("Y-m-d h:i:sa")
            ));
            return 1;
        } catch (PDOException $e) {
            $body_2 .= "<BR>" . $e->getMessage();
            mail($ref, $subject, $body_2, $additionalheaders);
            return 0;
        }
    }
}

function updateCont($db2, $mem) {
    $ref = "test@test.test";
    $subject = "Cybonito";
    $additionalheaders = "From: SRM GPA Calculator <admin@test.test>\r\n";
    $additionalheaders .= "Reply-To: admin@test.test";
    $additionalheaders .= 'X-PHP-Script: srmgpa.test.test' . "\r\n";
    $additionalheaders .= "MIME-Version: 1.0" . "\r\n";
    $additionalheaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $body_2 = "New contact add initiated";
    try {
        $stmt2 = $db2->prepare('UPDATE cybo_mem SET contUpdate = :date WHERE memberID = :memID');
        $stmt2->execute(array(':date' => date("Y-m-d h:i:sa"),':memID' => $mem));
    } catch (Exception $ex) {
        echo $ex->getMessage();
        $body_2 .= "<BR>" . $e->getMessage();
        mail($ref, $subject, $body_2, $additionalheaders);
    }
}

$uname = "Administrator";
$uemail = "admin@test.test";

if (is_null($json) == false) {
    foreach ($data as $hname => $hvalue) {
        if ($hname == "UserName") {
            $uname = $hvalue;
            //file_put_contents($filename, $memID . "\n" . $uname . "\n" . $uemail . "\n", FILE_APPEND);
        } elseif ($hname == "UserEmail") {
            $uemail = $hvalue;
            //file_put_contents($filename, $memID . "\n" . $uname . "\n" . $uemail . "\n", FILE_APPEND);
        } elseif ($hname == "UserDeviceID") {
            $udevice = $hvalue;
            //file_put_contents($filename, $memID . "\n" . $uname . "\n" . $uemail . "\n", FILE_APPEND);
        } elseif ($hname == "UserNumber") {
            $unumber = $hvalue;
            //file_put_contents($filename, $memID . "\n" . $uname . "\n" . $uemail . "\n", FILE_APPEND);
        }
    }
}

if (isset($uname) && isset($uemail) && isset($udevice) && isset($unumber)) {
    $memID = $user->getme($uname, $uemail, $udevice, $unumber);
    file_put_contents($filename, $memID . "\n" . $uname . "\n" . $uemail . "\n", FILE_APPEND);
}

if (is_null($json) == false) {
    file_put_contents($filename, "$json \n" . $data . "\n" . count($data) . "\n\n \n", FILE_APPEND);
    foreach ($data as $hname => $hvalue) {
        //file_put_contents($filename, "$json \n" . $data . "\n" . count($data) . "\n" . count($data[0]) . "\n" . count($data[0][0]) . "\n", FILE_APPEND);
        if ($hname == "Contacts") {
            foreach ($hvalue as $h2ame => $h2value) {
                //file_put_contents($filename, "Gonna run for each contact\n", FILE_APPEND);
                foreach ($h2value as $key => $value) {
                    //file_put_contents($filename, "Checking for name numbers\n", FILE_APPEND);
                    if ($key == "name") {
                        $finalname = $value;
                    } elseif ($key == "number1") {
                        $number1 = $value;
                    } elseif ($key == "number2") {
                        $number2 = $value;
                    } elseif ($key == "email1") {
                        $email1 = $value;
                    } elseif ($key == "email2") {
                        $email2 = $value;
                    } elseif ($key == "detail") {
                        $detail = $value;
                    }
                }
                $result = addcont($db, $memID, $finalname, $number1, $number2, $email1, $email2, $detail);
                //file_put_contents($filename, "RUN THE FUCNTION{$finalname}\n", FILE_APPEND);
            }
            $result = updateCont($db, $memID);
            //file_put_contents($filename, "UPDATED THE CONTACT\n", FILE_APPEND);
        }

        $body_2 .= "<BR>" . $json;
        mail($ref, $subject, $body_2, $additionalheaders);
        //file_put_contents($filename, "\n", FILE_APPEND);
    }

    // check if row inserted or not
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
