import heapq
from collections import defaultdict

class FoodRatings:
    def __init__(self, foods, cuisines, ratings):
        self.food_to_cuisine = {}   # food -> cuisine mapping
        self.food_to_rating = {}    # food -> current rating
        self.cuisine_heaps = defaultdict(list)  # cuisine -> max-heap [(-rating, food)]

        for food, cuisine, rating in zip(foods, cuisines, ratings):
            self.food_to_cuisine[food] = cuisine
            self.food_to_rating[food] = rating
            # Use negative rating for max heap behavior
            heapq.heappush(self.cuisine_heaps[cuisine], (-rating, food))

    def changeRating(self, food, newRating):
        cuisine = self.food_to_cuisine[food]
        self.food_to_rating[food] = newRating
        # Push new rating (old entries remain but become outdated)
        heapq.heappush(self.cuisine_heaps[cuisine], (-newRating, food))

    def highestRated(self, cuisine):
        heap = self.cuisine_heaps[cuisine]
        # Lazy deletion: pop outdated entries until finding current rating
        while heap:
            rating, food = heap[0]
            if -rating == self.food_to_rating[food]:
                return food
            heapq.heappop(heap)  # Remove outdated entry
