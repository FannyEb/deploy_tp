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
