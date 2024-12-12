import requests
from bs4 import BeautifulSoup
import os
from PIL import Image
from io import BytesIO

# Step 1: Fetch the webpage content
url = "https://www.bigbasket.com/pc/fruits-vegetables/fresh-vegetables/"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

# Step 2: Parse the HTML to find item details (names, prices, images)
items = soup.find_all("div", class_="item-prod")

data_folder = "bigbasket_items"
if not os.path.exists(data_folder):
    os.makedirs(data_folder)

# Step 3: Loop through items and extract details
for index, item in enumerate(items, start=1):
    try:
        # Extract name
        name = item.find("a", class_="ng-binding").get_text(strip=True)
        
        # Extract price
        price = item.find("span", class_="discnt-price").get_text(strip=True)
        
        # Extract image URL
        img_tag = item.find("img")
        img_url = img_tag['bb-src'] if 'bb-src' in img_tag.attrs else img_tag['src']

        # Save image with unique ID
        img_response = requests.get(img_url)
        img = Image.open(BytesIO(img_response.content))
        img_path = os.path.join(data_folder, f"{index}.jpg")
        img.save(img_path)

        # Save name and price to a text file
        with open(os.path.join(data_folder, "items.csv"), "a") as f:
            f.write(f"{index},{name},{price},{img_path}\n")

        print(f"Saved item {index}: {name}, {price}, Image saved as {index}.jpg")

    except Exception as e:
        print(f"Failed to save item {index}: {e}")

print("Scraping completed!")
