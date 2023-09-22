def cc():
    answer = input('Enter a number: ')
    card = int(answer)  # Convert input to an integer
    result = None  # Initialize result

    # Use if-elif statements to match cases
    if card == 2:
        result = 2
    elif card == 3:
        result = 3
    elif card == 4:
        result = 4
    elif card == 5:
        result = 5
    elif card == 6:
        result = 6
    else:
        result = str(answer) + ' numero '

    print('Result:', result)
    print('Answer:', answer)

cc()
