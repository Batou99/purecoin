module Data.Crypto where

foreign import sha1 :: String -> String
foreign import sha256 :: String -> String
foreign import sha384 :: String -> String
foreign import sha512 :: String -> String
foreign import md5 :: String -> String
foreign import hmac :: String -> String

