<?php
//class client
class Client
{
    public $id;
    public $firstname;
    public $lastname;
    public $login;
    public $civility;
    public $phone;
    public $email;
    public $password;
    public $address;
    public $city;
    public $codecity;
    public $country;

    public function getId()
    {
        return $this->id;
    }
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
    }
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }
    public function setLogin($login)
    {
        $this->login = $login;
    }
    public function setCivility($civility)
    {
        $this->civility = $civility;
    }
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }
    public function setEmail($email)
    {
        $this->email = $email;
    }
    public function setPassword($password)
    {
        $this->password = $password;
    }
    public function setAddress($address)
    {
        $this->address = $address;
    }
    public function setCity($city)
    {
        $this->city = $city;
    }
    public function setCodecity($codecity)
    {
        $this->codecity = $codecity;
    }
    public function setCountry($country)
    {
        $this->country = $country;
    }
}