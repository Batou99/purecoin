module Crypto where

type Hash = String
type Data = String

type Block = { prev :: Hash, chunk :: Data }

data Chain = List Block




