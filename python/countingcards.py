count = 0 
def cc():
    answer = input('numero ')
    card = answer
    match card :
        case 2:
            result = 2
        case 3:
            result = 3
        case 4:
            result = 4
        case 5:
            result = 5
        case 6:
            result = 6
        case _:
            result = answer + ' numero '
    print(result)
    print(answer)

cc()



   
