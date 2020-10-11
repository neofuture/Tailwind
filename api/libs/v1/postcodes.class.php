<?php

class postcodes
{

  public static function lookup($pdo, $jsonStr, $session)
  {

    $url = "http://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/RetrieveByPostcodeAndBuilding/v1.30/xmla.ws?";
    $url .= "&Key=" . urlencode("GR91-XU77-DB27-XN24");
    $url .= "&Postcode=" . urlencode($jsonStr->postcode);
    $url .= "&UserName=" . urlencode("INTEG11148");

    $data = simplexml_load_string(file_get_contents($url));

    $rows = [];
    foreach ($data->Rows->Row as $row) {
      $rowItems = [];
      foreach ($row->attributes() as $key => $value) {
        $rowItems[$key] = strval($value);
      }

      $item["Line1"] = $rowItems["Line1"];
      $item["Line2"] = $rowItems["Line2"];
      $item["PostTown"] = $rowItems["PostTown"];
      $item["County"] = $rowItems["County"];
      $item["CountryName"] = $rowItems["CountryName"] === "England" ? "GB" : '' ;
      $item["Postcode"] = $rowItems["Postcode"];
      $item["Company"] = $rowItems["Company"];

      $rows[] = $item;
    }

    return $rows;

  }
}





// $address_array = pc_lookup("GR91-XU77-DB27-XN24", $_GET['postcode'], $_GET['number'], "INTEG11148");
