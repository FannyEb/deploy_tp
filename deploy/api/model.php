<?php
//class product
class Product
{
    public $id;
    public $name;
    public $price;
    public $description;
    public $image;
    public $category;

    public function setId($id)
    {
        $this->id = $id;
    }
    public function setName($name)
    {
        $this->name = $name;
    }
    public function setPrice($price)
    {
        $this->price = $price;
    }
    public function setDescription($description)
    {
        $this->description = $description;
    }
    public function setImage($image)
    {
        $this->image = $image;
    }
    public function setCategory($category)
    {
        $this->category = $category;
    }

}

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

    public function setId($id)
    {
        $this->id = $id;
    }
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