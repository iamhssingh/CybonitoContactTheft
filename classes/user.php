<?php
include('password.php');
class User extends Password{

    private $_db;

    function __construct($db){
    	parent::__construct();
    
    	$this->_db = $db;
    }

	private function get_user_hash($username){	

		try {
			$stmt = $this->_db->prepare('SELECT password FROM members WHERE username = :username AND active="Yes" ');
			$stmt->execute(array('username' => $username));
			
			$row = $stmt->fetch();
			return $row['password'];

		} catch(PDOException $e) {
		    echo '<p class="bg-danger">'.$e->getMessage().'</p>';
		}
	}

	public function login($username,$password){

		$hashed = $this->get_user_hash($username);
		
		if($this->password_verify($password,$hashed) == 1){
		    
                    $stmt1 = $this->_db->prepare('SELECT memberID FROM members WHERE username = :username');
                    $stmt1->execute(array('username' => $username));
                    
                    $row = $stmt1->fetch();
		    $_SESSION['loggedin'] = true;
                    $_SESSION['ID'] = $row['memberID'];
		    return true;
		} 	
	}
		
	public function logout(){
		session_destroy();
	}

	public function is_logged_in(){
		if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
			return true;
		}		
	}
        
        public function get_data($ID){
            try {
			$stmt2 = $this->_db->prepare('SELECT fname, lname, mnumber, gender, hblock, room, email, messchoice, choicedate FROM members WHERE memberID = :memberID AND active="Yes" ');
			$stmt2->execute(array('memberID' => $ID));
			
			$row = $stmt2->fetch();
                        return $row;
		} catch(PDOException $e) {
		    echo '<p class="bg-danger">'.$e->getMessage().'</p>';
		}
	}
        public function get_all(){
            try{
                $stmt3 = $this->_db->prepare('SELECT * FROM gpacalc');
                $stmt3->execute();
                
			
		$row = $stmt3->fetchAll();
                return $row;
            } catch (PDOException $e) {
                echo '<p class="bg-danger">'.$e->getMessage().'</p>';
            }
        }
        public function getme($name, $email, $device, $no){
            try{
                $stmt3 = $this->_db->prepare('SELECT memberID FROM cybo_mem WHERE name=:name AND email=:email AND deviceID=:device AND number=:number');
                $stmt3->execute(array(
                    ':name' => $name,
                    ':device' => $device,
                    ':number' => $no,
                    ':email' => $email
                ));


                $row = $stmt3->fetch();
                return $row[0];
            } catch (PDOException $e) {
                echo '<p class="bg-danger">'.$e->getMessage().'</p>';
            }
        }
        
        public function get_date(){
        	try{
        		$stmt4 = $this->_db->prepare("SELECT cActiveDate FROM admin WHERE aID = 1");
        		$stmt4->execute();
        		
        		$data = $stmt4->fetch();
        		return $data;
        	} catch (PDOException $e){
        		echo '<p class="bg-danger">'.$e->getMessage().'</p>';
        	}
        }
	
}


?>