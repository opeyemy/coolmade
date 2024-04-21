<script>
        {
        var specialOffersList = document.getElementById('home');

        // Create elements for the special offer
        var specialOfferDiv = document.createElement('div');
        specialOfferDiv.classList.add('menu-item');
        
        var img = document.createElement('img');
        img.src = imageSrc;
        img.alt = name;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.borderRadius = '8px';
        img.style.marginRight = '20px';

        var div = document.createElement('div');
        var h3 = document.createElement('h3');
        h3.textContent = name;
        var p = document.createElement('p');
        p.textContent = description;

        // Append elements to the special offer div
        div.appendChild(h3);
        div.appendChild(p);
        specialOfferDiv.appendChild(img);
        specialOfferDiv.appendChild(div);

        // Append the special offer div to the special offers list
        specialOffersList.appendChild(specialOfferDiv);
    
   

    // Call the function to add special offers
    addSpecialOffer('Special Dish', 'Description of Special Dish', 'special-dish.jpg');
    addSpecialOffer('Family Meal Deal', 'Description of Family Meal Deal', 'family-meal.jpg');
        }
    </script>
