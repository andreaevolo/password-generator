from enum import Enum
from random import randrange


class CharTypes(Enum):
    LOWER_CASE = 0
    UPPER_CASE = 1
    NUMBER = 2
    SPECIAL_CHARS = 3


class RandomPasswordGenerator():
    password_len = 0
    uppercase_letter_size = 0
    lowercase_letter_size = 0
    numbers_size = 0
    special_chars_size = 0

    def getRandomLowerCaseLetter(self):
        return chr(randrange(97, 123))

    def getRandomUpperCaseLetter(self):
        return chr(randrange(65, 90))

    def getRandomInteger(self):
        return str(randrange(10))

    def getRandomSpecialChar(self):
        special_chars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        return special_chars[randrange(0, len(special_chars))]

    def getRandomChar(self):
        randomCharClass = CharTypes(randrange(0, 4))

        if CharTypes.LOWER_CASE == randomCharClass:
            return self.getRandomLowerCaseLetter()
        if CharTypes.UPPER_CASE == randomCharClass:
            return self.getRandomUpperCaseLetter()
        if CharTypes.NUMBER == randomCharClass:
            return self.getRandomInteger()
        if CharTypes.SPECIAL_CHARS == randomCharClass:
            return self.getRandomSpecialChar()

    def generatePassword(self, password_len=6):
        self.password_len = password_len
        password = ""
        while self.password_len:
            password += self.getRandomChar()
            self.password_len -= 1
        return password
