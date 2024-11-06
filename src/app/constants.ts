import telegram from "@/assets/telegram.png"
import twitter from "@/assets/twitter.png"
import dextools from "@/assets/dextools.jpg"
import tradeUni from "@/assets/uniswap.svg"
import dexscreener from "@/assets/dexscreener.jpg"
import opensea from "@/assets/opensea.svg"
import rarible from "@/assets/rarible.png"
import magieden from "@/assets/magiceden.png"


// TTS INFO

export const tokenInfo=[{
  name:"TRUMP'S FIGHT FIST",
  contractAddress:"0x7d83b9d9236a97bb3f0d7804e9824445fc483ae1",
  ticker:"TTS",
  chain:"Base Chain",
  totalSupply:"420.66 B",
  circulatingSupply:"420.66 B (100%)",
  buyTax:"0%",
  sellTax:"0%",
  tradeUniswap:"https://app.uniswap.org/explore/tokens/base/0x7d83b9d9236a97bb3f0d7804e9824445fc483ae1",
}]

export const tokenCard=[
  {header:"name", content:"TRUMP'S FIGHT FIST"},
  {header:"ticker", content:"TTS"},
  {header:"chain", content:"Base Chain"},
  {header:"total supply", content:"420.66 B"},
  {header:"buy tax",content:"0%"},
  {header:"sell tax", content:"0%"},
]

export const nftInfo=[
  {
    header:"NAME",
    content:"THE FIGHT",
  },
  {
    header:"SUPPLY",
    content:"5,000",
  },
  {
    header:"PRICE",
    content:"0.1 ETH",
  },
  {
    header:"CHAIN",
    content:"Base",
  },
]

export const socialLink =[
  {
    social:"TWITTER X",
    link:"https://x.com/TheFightFist",
    icons:twitter,
  },
  {
    social:"TELEGRAM",
    link:"https://t.me/+CjzwzintOdJjNGNi",
    icons:telegram,
  },
  {
    social:"DEXTOOLS",
    link:"https://www.dextools.io/app/en/base/pair-explorer/0xc85af4a37edefb27b9449ac71b93ad76d59d145f?t=1730101948591",
    icons:dextools,
  },
  {
    social:"DEXSCREENER",
    link:"https://dexscreener.com/base/0xc85af4a37edefb27b9449ac71b93ad76d59d145f",
    icons:dexscreener,
  },
  {
    social:"UNISWAP",
    link:"https://app.uniswap.org/explore/tokens/base/0x7d83b9d9236a97bb3f0d7804e9824445fc483ae1",
    icons:tradeUni,
  },
  {
    social:"OPENSEA",
    link:"https://opensea.io/collection/the-fight-nft",
    icons:opensea,
  },
  {
    social:"RARIBLE",
    link:"https://rarible.com/the-fight-nft/items",
    icons:rarible,
  },
  {
    social:"MAGIC EDEN",
    link:"https://magiceden.io/collections/base/0x30287a98f07860abf0f469365a2210b5296fd164",
    icons:magieden,
  },
]