import shutil
import os
import re
import platform

def prefix_engine(botname, botprefix):
    reading_file = open("botgen/" + botname + "/config.json", "r")
    new_file_content = ""

    for line in reading_file:
        stripped_line = line.strip()
        new_line = stripped_line.replace("prf", botprefix)
        new_file_content += new_line +"\n"

    reading_file.close()
    writing_file = open("botgen/" + botname + "/config.json", "w")
    writing_file.write(new_file_content)
    writing_file.close()


def file_copy(botname):
    source_dir = r"template"
    destination_dir = r"botgen/" + botname
    shutil.copytree(source_dir, destination_dir)

def clear():
    os_type = platform.system()

    if os_type == "Windows":
        os.system('CLS')
    else:
        os.system('clear')

def choose_cmds (types):
    i = 0
    y = 0
    file = open('cmd_' + types + '.txt')
    content = file.readlines()
    len_file = len(content)

    print(types + " category:\n")

    while not (y == len_file):
        content_no = re.sub("\n", "", content[y])
        print(str((y + 1)) + " - " + content_no)
        y += 1

    print("\ntype number of commands you want to (ex : 1,4,6)")
    print("press enter to next step")
    cmds = input()

    nbvir = cmds.count(',')
    nblen = len(cmds) - nbvir
    cmd = re.sub(",", "", cmds)

    while not (i == nblen):
        commande_name = content[int(cmd[i]) - 1]
        commande_name = re.sub("\n", "", commande_name)
        shutil.copyfile("cmds/" + commande_name + ".js", "botgen/" + botname + "/commands/" + commande_name + ".js")
        i += 1

def recap ():
    print("So config of your bot :\n")
    print("name : " + botname)
    print("prefix : " + botprefix + "\n")
    print("your commands :\n")

    recap_dir = "botgen/" + botname + "/commands"
    for x in os.listdir(recap_dir):
        if x.endswith(".js"):
            name_no = re.sub(".js", "", x)
            print(name_no)

    print("so, your bot is available in 'botgen' directory")

 
print("MakeYourBot\n")

print("name of yout bot :")
botname = input()
file_copy(botname)
print("prefix of your bot :")
botprefix = input()
prefix_engine(botname, botprefix)
clear()
print("your bot " + botname + " was create ! Now choose your commande\n")
a = 'fun'
b = 'modo'
c = 'info'
d = 'bot_info'
choose_cmds(a)
clear()
choose_cmds(b)
clear()
choose_cmds(c)
clear()
choose_cmds(d)
clear()
recap()